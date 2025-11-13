
const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center gap-5 py-5">
                <div className="overflow-hidden" style={{
                    width: "20rem", height: "20rem",
                    borderRadius: "10px",
                    boxShadow: "-3px -3px 0px rgba(82, 9, 110, 1), 3px 3px 0px #2f00ffff"
                }}
                >
                    <img
                        className="w-100 h-100 object-fit-cover"
                        src="./src/assets/stdempimg.gif"
                        alt="Picture"
                    />
                </div>
            </div>
            <hr className="mx-auto opacity-100" style={{ color: '#00293bff' }} />
            <p className="w-50 mx-auto pb-5" style={{ color: '#531630ff' }}>
                <b>ชื่อ-นามสกุล:</b> ภูบดินทร์ เรืองวิลัย <br />
                <b>ชื่อเล่น:</b> เฟีย <br />
                <b>ปัจจุบันศึกษาที่:</b> มหาวิทยาลัยศรีปทุม <br />
                <b>คณะ:</b> เทคโนโลยีสารสนเทศ <br />
                <b>สาขา:</b> วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ <br />
                <b>ชั้นปีที่:</b> 2 <br />
                <b>รหัสนักศึกษา:</b> 67163975 <br />
                <hr className="w-25 opacity-100" style={{ color: '#326096' }} />
                <b>งานอดิเรก:</b> เล่นเกม, อ่านหนังสือ, ทำอาหาร<br />
                <b>ความสามารถพิเศษ:</b> เข้าใจง่าย <br />
                <b>สิ่งที่ชอบ:</b> ชอบสัตว์น่ารักๆ , ชอบคนที่มีมารยาท , ชอบของหวาน <br />
                <b>สิ่งที่ไม่ชอบ:</b> สัตว์เลื้อยคลาน , การอ่านหนังสือ <br />
            </p>
        </>
    )
}

export default Home;