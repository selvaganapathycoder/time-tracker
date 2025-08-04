import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

interface Props {
    onAdd: (activity: string, hours: number) => void;
}


const TimeForm = ({ onAdd }: Props) => {
    const [activity, setActivity] = useState("");
    const [hours, setHours] = useState("");

    const handleSubmit = () => {
        if (!activity.trim() || !hours) alert("please fill all fields");
        

        onAdd(activity, Number(hours));
        setActivity("");
        setHours("");
    }

    return (


        <div className="space-y-4">


            <Input placeholder="Activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)} />

            <Input type="number" placeholder="Hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)} />
            <Button className="w-full" onClick={handleSubmit}>
                Add Activity
            </Button>
        </div>
    )

}

export default TimeForm