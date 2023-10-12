import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    EyeOutlined,
    UserOutlined,
    UserAddOutlined,
    BookOutlined
} from '@ant-design/icons';
import './Stats.css'

function Stats() {
    return (
        <div className="container-fluid">
            <div className="row mainStats">
                <h2>Profile Statistics</h2>
                <div className="col-3"></div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="row icontext">
                        <div className="col-3 sub ">
                            <EyeOutlined style={{ fontSize: "24px" }} className='eye' />
                            <span>1800</span>
                        </div>
                        <div className="col-3 sub">
                            <UserOutlined style={{ fontSize: "24px" }} className='user' />
                            <span>12000</span>
                        </div>
                        <div className="col-3 sub">
                            <UserAddOutlined style={{ fontSize: "24px" }} className='useradd' />
                            <span>200</span>
                        </div>
                        <div className="col-3 sub">
                            <BookOutlined style={{ fontSize: "24px" }} className='book' />
                            <span>50</span>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default Stats