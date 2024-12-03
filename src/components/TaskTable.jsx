import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const TaskTable = () => {

    const { tasks } = useSelector((store) => store.crudRecucer)

    return (
        <Table variant="dark" striped hover bordered responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Görev</th>
                    <th>Yazan</th>
                    <th>Atanan</th>
                    <th>Tarih</th>
                    <th>İşlemler</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <TableRow key={task.id} task={task} handleDelete={handleDelete} />
                ))}
            </tbody>
        </Table>
    )
}

export default TaskTable