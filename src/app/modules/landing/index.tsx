import React from "react";
import Image from "next/image";
import { Input } from "antd";

const Landing = () => {
    return (
        <div className="mt-8 flex flex-col items-center">
            <Image src="/jpeg/ywc20.jpg" alt="YWC 20th logo" width={400} height={400} />
            <div>The result is already published</div>
            <div>
                Name
                <Input placeholder="Enter your name"/>
            </div>
        </div>
    )
};

export default Landing;
