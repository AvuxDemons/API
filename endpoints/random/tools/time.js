module.exports = {
    run: async (req, res, next) => {
        let kalender = new Date();
        let hh = kalender.getHours();
        let mm = kalender.getMinutes();
        let ss = kalender.getSeconds();
        let hari = kalender.getUTCDay();
        let tanggal = kalender.getUTCDate();
        let bulan = kalender.getMonth();
        let tahun = kalender.getFullYear();

        // CLOCK
        let session = "AM";

        if (hh == 0) {
            hh = 12;
        }
        if (hh > 12) {
            hh = hh - 12;
            session = "PM";
        }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;

        //DATE
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[bulan];

        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[hari];

        //RESULT
        let time = hh + ":" + mm + ":" + ss + " " + session;
        let date1 = day + ' , ' + tanggal + ' ' + month + ' ' + tahun;

        res.statusCode = 200;
        res.json({
            clock: `${time}`,
            date: `${date1} Coordinated Universal Time (UTC)`
        });
    }
};