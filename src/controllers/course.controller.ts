import { Request, Response} from "express";
import Course from "../model/course"

function getCourses(req:Request, res:Response):void {
    Course.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function postCourse (req: Request, res: Response): void {
    const course = new Course({
        "id": req.body.id,
        "description": req.body.description,
        "iconUrl": req.body.iconUrl,
        "longDescription": req.body.longDescription,
        "category": req.body.category,
        "lessonsCount": req.body.lessonsCount
    });
    console.log(req.body);
    course.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

export default { getCourses, postCourse };