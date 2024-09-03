import React from "react";
import './TodoList.css'

class TodoList extends React.Component {
    constructor(props) {
        super();
        console.log("TodoList Constructor");
    }

    componentDidMount() {
        console.log("TodoList componentDidMount");
    }

    render(){
        console.log("TodoList render");

        const {congviec} = this.props;

        if (!Array.isArray(congviec)) {
            return <div>Không có công việc nào để hiển thị.</div>;
        }

        
        return (
            <div>
                <table>
                    <thead>
                        <th>Tên công việc</th>
                        <th>Mô tả</th>
                        <th>Thời gian</th>
                        <th>Hoàn thành</th>
                    </thead>
                    {congviec.map((cv) => (
                        <tbody key={cv.id} className="TodoList">
                            <td>{cv.ten}</td>
                            <td>{cv.mota}</td>
                            <td>{cv.thoigian}</td>
                            <td><input type="checkbox" checked={cv.trangthai} readOnly/></td>
                        </tbody>
                    ))}
                </table>

            </div>
        );
    }
}

export default TodoList;