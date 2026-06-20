const path = require('path');
//1

function logCurrentPaths() {
    console.log({
        File: __filename,
        Dir: __dirname
    });
}
logCurrentPaths();

//2
function getFileName(filePath) {
    return path.basename(filePath);
}
console.log(getFileName('/user/files/report.pdf')); 

//3
function buildPath(pathObj) {
    return path.format(pathObj);
}
const myObject = { dir: "/folder", name: "app", ext: ".js" };
console.log(buildPath(myObject)); 

//4 

function getExtension(filePath) {
    return path.extname(filePath);
}
console.log(getExtension("/docs/readme.md")); 

//5

function parsePath(filePath) {
    const parsed = path.parse(filePath);
    return {
        Name: parsed.name,
        Ext: parsed.ext
    };
}
console.log(parsePath('/home/app/main.js')); 

//6
function checkIfAbsolute(filePath) {
    return path.isAbsolute(filePath);
}
console.log(checkIfAbsolute('/home/user/file.txt')); 

//7

function joinSegments(...segments) {
    return path.join(...segments);
}
console.log(joinSegments("src", "components", "App.js")); 

//8

function makeAbsolute(relativePath) {
    return path.resolve(relativePath);
}
console.log(makeAbsolute('./index.js'));

//9 

function joinTwoPaths(path1, path2) {
    return path.join(path1, path2);
}
console.log(joinTwoPaths('/folder1', 'folder2/file.txt')); 

//10 

function deleteFileAsync(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Error deleting file:", err.message);
            return;
        }
        const fileName = path.basename(filePath);
        console.log(`The ${fileName} is deleted.`);
    });
}

//11

function createFolderSync(folderPath) {
    try {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
        return "Success";
    } catch (err) {
        return "Error: " + err.message;
    }
}
console.log(createFolderSync('./new-folder')); 

//12

const myEmitter = new EventEmitter();
myEmitter.on('start', () => {
    console.log('Welcome event triggered!');
});
myEmitter.emit('start');

//13

myEmitter.on('login', (username) => {
    console.log(`User logged in: ${username}`);
});
myEmitter.emit('login', 'Ahmed'); 

//14

function readFileSyncAndLog(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        console.log(`the file content => "${content}"`);
    } catch (err) {
        console.error("Error reading file:", err.message);
    }
}

//15
function writeFileAsync(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error("Error writing file:", err.message);
            return;
        }
        console.log("File saved successfully asynchronously.");
    });
}
writeFileAsync("./async.txt", "Async save");

//16
function checkExists(targetPath) {
    return fs.existsSync(targetPath);
}
console.log(checkExists("./notes.txt"));

//17
function getOSDetails() {
    return {
        Platform: os.platform(),
        Arch: os.arch()
    };
}
console.log(getOSDetails()); 

