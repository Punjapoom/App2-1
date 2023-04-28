import React from 'react'

export function MyAbout(){
    return (
        <div style={{textAlign:'center',color:'green'}}>
            <br/> <br/> <a>ข้อมูลส่วนตัว</a><br/><br/>  
        </div> 
    )
}
export function MyImage(){
    return (
        <div style={{textAlign:'center'}}>
            <img src="./images/JOSEPH.jpg" width="20%"/>
            <br/><br/> 
        </div>
    )
}
export function MyData (){
    return (
        <div style={{textAlign:'center'}}>
            <a>ชื่อ-นามสกุล : ปัญจภูมิ มีสีดา</a><br/>
            <a>เลขที่ : 11</a><br/>
            <a>ห้อง : DT26521N</a><br/>
            <a>สิ่งที่ชอบ : ของกิน เกม การ์ตูน เที่ยงต่างประเทศ</a><br/>
        </div>
    )
}
