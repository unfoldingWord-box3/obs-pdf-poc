const puppeteer = require('puppeteer');
const net = require('net');

/**
 * iterate through process arguments and separate out flags and other parameters
 * @return {{kargs: {}, args: []}}
 */
function separateArgs() {
    const kargs = {}
    const args = [];

    for (let i = 2, l = process.argv.length; i < l; i++) {
        const arg = process.argv[i];

        if (arg.length > 2 && arg.substr(0, 2) === '--') { // see if keyed arg or flag
            var str = arg.substr(2);
            parts = str.split('=')
            if (parts.length > 1) {
                var key = parts[0];
                var value = parts.slice(1).join('=')
            } else {
                var key = str;
                var value = true;
            }
            kargs[key] = value;
        } else {
            args.push(arg);
        }
    }
    return { kargs, args };
}

// run as main
if (require.main === module) {
    if (process.argv.length < 3) {
        console.error('Syntax: npm run generate output_path=<file path for outputed PDF> [port=<port>]');
        process.exit(1);
    }
    const {kargs, args} = separateArgs(process.argv);

    var outputPath = kargs['output_path'] || '../output.pdf';
    var port = kargs["port"] || "3000";
    
    var sock = new net.Socket();
    var url = 'http://localhost:'+port
    sock.setTimeout(2500);
    sock.on('connect', function() {
        console.log(url+' is up.');
        sock.destroy();
    }).on('error', function(e) {
        console.log(url+' is down. Please run `npm start &` first and then `npm run generate`');
        process.exit(1)
    }).on('timeout', function(e) {
        console.log(url+' is down: timeout');
        process.exit(1)
    }).connect(port, 'localhost');

    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        console.log("Generating PDF from " + url + ", outputting to " + outputPath)
        page.emulaemulateMediaType = 'print';
        await page.pdf({
            path: outputPath, // path (relative to CWD) to save the PDF to.
            printBackground: false, // print background colors
            format: 'A4'
        });
        await browser.close();
        console.log("File generated. File can be viewed at " + outputPath);
    })()
}
