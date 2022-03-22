const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain
global.anticall = false
global.anti_delete = false

// setting
global.ownername ="Seti Awan"
global.ownernumber = "62895411143170"
global.botname = "Tia-Bot"
global.thumbnail = fs.readFileSync("./settings/Sean.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = 'e1030fba5817c23dda67d0d3' //register lolhuman.xyz klo mau apikey
global.zenzkey = '25a8900a55' //register zenzapi.xyz klo mau apikey
global.limit = {
		free:10,
		premium:100
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
