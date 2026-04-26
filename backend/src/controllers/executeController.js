import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export const executeCode = async (req, res) => {
  const { language, code } = req.body;

  if (!code) {
    return res.status(400).json({ message: "Code is required" });
  }

  const tempDir = path.join(process.cwd(), "temp");
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  const fileName = `${uuidv4()}`;
  let filePath = "";
  let command = "";

  try {
    switch (language) {
      case "javascript":
        filePath = path.join(tempDir, `${fileName}.js`);
        fs.writeFileSync(filePath, code);
        command = `node "${filePath}"`;
        break;
      case "python":
        filePath = path.join(tempDir, `${fileName}.py`);
        fs.writeFileSync(filePath, code);
        command = `python "${filePath}"`;
        break;
      case "java":
        const classNameMatch = code.match(/class\s+(\w+)/);
        const className = classNameMatch ? classNameMatch[1] : "Solution";
        const javaDir = path.join(tempDir, fileName);
        fs.mkdirSync(javaDir);
        filePath = path.join(javaDir, `${className}.java`);
        fs.writeFileSync(filePath, code);
        command = `javac "${filePath}" && java -cp "${javaDir}" ${className}`;
        break;
      case "c":
        filePath = path.join(tempDir, `${fileName}.c`);
        const cExecutable = path.join(tempDir, `${fileName}.exe`);
        fs.writeFileSync(filePath, code);
        command = `gcc "${filePath}" -o "${cExecutable}" && "${cExecutable}"`;
        break;
      case "cpp":
        filePath = path.join(tempDir, `${fileName}.cpp`);
        const cppExecutable = path.join(tempDir, `${fileName}.exe`);
        fs.writeFileSync(filePath, code);
        command = `g++ "${filePath}" -o "${cppExecutable}" && "${cppExecutable}"`;
        break;
      default:
        return res.status(400).json({ message: "Unsupported language" });
    }

    const startTime = process.hrtime();

    exec(command, (error, stdout, stderr) => {
      const endTime = process.hrtime(startTime);
      const runtimeMs = (endTime[0] * 1000 + endTime[1] / 1000000).toFixed(2);

      // Cleanup files
      try {
        if (language === "java") {
          fs.rmSync(path.dirname(filePath), { recursive: true, force: true });
        } else if (language === "c" || language === "cpp") {
          const executablePath = filePath.replace(/\.(c|cpp)$/, ".exe");
          if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
          if (fs.existsSync(executablePath)) fs.unlinkSync(executablePath);
        } else {
          if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        }
      } catch (cleanupError) {
        console.error("Cleanup error:", cleanupError);
      }

      if (error && !stderr) {
        return res.status(500).json({ message: error.message });
      }

      res.status(200).json({
        run: {
          output: stdout,
          stderr: stderr,
          runtime: runtimeMs,
        },
      });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
