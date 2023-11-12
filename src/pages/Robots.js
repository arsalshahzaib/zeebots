import { Card } from "../pages";
import UR from "../assets/ur10png.png";
import { BsBatteryFull } from "react-icons/bs";
export const Robots = () => {
    return (
        <div className="p-4 flex gap-3 justify-center ">
            <Card width="w-72 bg-[#cad7ba]">
                <img src={UR} />
                <p>UR10</p>
                <p className="text-center">
                    <strong>Battery Health: </strong>
                    <BsBatteryFull className="inline" />
                </p>
                <p className="text-center">
                    Precision automation for industrial tasks with a large
                    working envelope and collaborative capabilities.
                </p>
                <p>
                    <strong>Status: </strong>
                    Occupied
                </p>
            </Card>
            <Card width="w-72 bg-[#b88282]">
                <img src={UR} />
                <p>URe5</p>
                <p className="text-center">
                    <strong>Battery Health: </strong>
                    <BsBatteryFull className="inline" />
                </p>
                <p className="text-center">
                    Versatile robotic arm designed for precise and collaborative
                    automation in various industrial applications.
                </p>
                <p>
                    <strong>Status: </strong>
                    Damaged
                </p>
            </Card>
            <Card width="w-72 bg-gray-300">
                <img src={UR} />
                <p>Mobile Robot</p>
                <p className="text-center">
                    <strong>Battery Health: </strong>
                    <BsBatteryFull className="inline" />
                </p>
                <p className="text-center">
                    A versatile and agile robotic solution designed for
                    autonomous navigation and tasks in dynamic environments.
                </p>
                <p>
                    <strong>Status: </strong>
                    Vacant
                </p>
            </Card>
        </div>
    );
};
