import "../style/news.css"
const newsApi = [
    {
        img:'/images/438094195749693754031207120239-4914-1905-1713855761.jpg'
    },
    {
        img:'/images/fayzullaev-jpeg-1713842322-9926-1713842345.jpg'
    },
    {
        img:'/images/viet-nam-trung-quoc-futsal-cha-7683-3161-1713803451.jpg'
    },
    {
        img:'/images/438094195749693754031207120239-4914-1905-1713855761.jpg'
    },
    {
        img:'/images/fayzullaev-jpeg-1713842322-9926-1713842345.jpg'
    },
    {
        img:'/images/viet-nam-trung-quoc-futsal-cha-7683-3161-1713803451.jpg'
    },
    {
        img:'/images/438094195749693754031207120239-4914-1905-1713855761.jpg'
    },
    {
        img:'/images/fayzullaev-jpeg-1713842322-9926-1713842345.jpg'
    },
    {
        img:'/images/viet-nam-trung-quoc-futsal-cha-7683-3161-1713803451.jpg'
    },

]
function News (){
    return <div>
        <div className="button_container">
            <button className="button button--active">Nhận Định</button>
            <button className="button">Soi Kèo</button>
            <button className="button">Tỉ Lệ</button>
        </div>
        <div className="title_container">
        <div className="title">Nhận định bóng đá</div>
        <div className="link">Xem tất cả</div>
        </div>
        <div className="news_list">
        { newsApi.map(item => (
        <div className="new_container">
         <img src={item.img} alt='img' className="image"></img>
         <div className="content">
            <div className="title">Nhận Định, Kết quả Sài Gòn FC Vs Hải Phòng: Chiến Thắng Sát Nút, Băng Băng Về Đích</div>
            <div className="time">
            <img src='/images/images.jpg' alt="icon" className="new_time_icon"></img>18/10/2022</div>
         </div>   
        </div>
        ))}
        </div>
      

    </div>
}
export default News