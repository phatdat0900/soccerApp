import "../style/calendar.css"
const matchApi = [
    {
        team1:'Tottenham Hotspur',
        team1Logo:'/images/logo4.png',
        team2:'Manchester United',
        team2Logo:'/images/logo2.png',
        score:"0-3",
        text:"Hiệp 2: 60'"
    },
    {
        team1:'armani bielefeld ',
        team1Logo:'/images/logo3.png',
        team2:'Manchester United',
        team2Logo:'/images/logo2.png',
        score:"0-3",
        text:"Hiệp 2: 60'"
    },
    {
        team1:'armani bielefeld ',
        team1Logo:'/images/logo1.png',
        team2:'Manchester United',
        team2Logo:'/images/logo2.png',
        time:"23:00"
    },
    {
        team1:'armani bielefeld ',
        team1Logo:'/images/logo4.png',
        team2:'Manchester United',
        team2Logo:'/images/logo5.png',
        time:"23:00"
    },
    {
        team1:'armani bielefeld ',
        team1Logo:'/images/logo6.png',
        team2:'Manchester United',
        team2Logo:'/images/logo2.png',
        time:"23:00"
    },
    {
        team1:'armani bielefeld ',
        team1Logo:'/images/logo5.png',
        team2:'Manchester United',
        team2Logo:'/images/logo3.png',
        time:"23:00"
    },
    {
        team1:'armani bielefeld ',
        team1Logo:'/images/logo1.png',
        team2:'Manchester United',
        team2Logo:'/images/logo4.png',
        time:"23:00"
    },
    {
        team1:'armani bielefeld ',
        team1Logo:'/images/logo2.png',
        team2:'Manchester United',
        team2Logo:'/images/logo5.png',
        time:"23:00"
    }
]
const dateApi = [
    {
        date:"3/10",
        dateName:"Chủ Nhật"
    },
    {
        date:"4/10",
        dateName:"Hôm nay"
    },
    {
        date:"5/10",
        dateName:"Thứ 3"
    },
    {
        date:"6/10",
        dateName:"Thứ 4"
    },
    {
        date:"7/10",
        dateName:"Thứ 5"
    },
    {
        date:"8/10",
        dateName:"Thứ 6"
    },
    {
        date:"9/10",
        dateName:"Thứ 7"
    }
]
function Calendar(){
    return <div className="match_calendar">
    <select className="select_input" name="" id="">
      <option value="">Hạng Nhất Quốc Gia</option>
    </select>
    <div className="date_list">
    {
        dateApi.map(item =>{
            return <div className={`date_container ${ item.dateName == "Hôm nay" ? "date_container--active " :'' }`}>
                <div className="date_name">{item.dateName}</div>
                <div className="date">{item.date}</div>
            </div>
        })
    }
    </div>
    <div className="match_list">
    {
        matchApi.map(item =>{
            return <div className={`match_container `}>
                <div className="name">{item.team1}</div>
                <img src={item.team1Logo} alt="logo" className="logo"></img>
                <div className="match_info">
                <div className="match_score">{item?.score}</div>
                <div className="match_text">{item?.text}</div>
                <div className="match_time">{item?.time}</div>
                </div>
                <img src={item.team2Logo} alt="logo" className="logo"></img>
                <div className="name name-left">{item.team2}</div>
                
            </div>
        })
    }
    </div>
    </div>
    }
    export default Calendar;