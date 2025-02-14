import React, { useState } from 'react'
import './task6.css'
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";


function Task6() {
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)
    const [addExperience, setExperiecne] = useState([])
    const [selected, setSelected] = useState(false)
    const [isVisisble, setIsvisisble] = useState(false)
    const [employee, setEmployee] = useState({
        id: Date.now(),
        empId: '',
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        role: '',
    })
    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: [e.target.value] })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (editId) {
            const updatedList = list.map((item) =>
                item.id === editId ? { ...employee, id: editId } : item)
            setList(updatedList)
            setEditId(null)
        }
        else {
            const array = { ...employee, id: Date.now() };
            setList([...list, array]);
        }
        setEmployee(
            {
                empId: '',
                firstname: '',
                lastname: '',
                email: '',
                gender: '',
                role: ''
            }
        )

    }
    const addEmp = () => {
        const updateExpeience = [...addExperience,
        {
            id: Date.now(),
            company: '', role1: '', experience: '',
            notice: '', startDate: '', endDate: ''
        }]
        setExperiecne(updateExpeience)
    }
    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const update = [...addExperience];
        update[index][name] = value;
        setExperiecne(update);
    };
    const handleEdit = (row) => {
        setEmployee(row);
        setEditId(row.id)
    }
    const handleDelete = (id) => {
        const updateList = addExperience.filter((item) => item.id !== id)
        setExperiecne(updateList)
    }
    console.log(addExperience)

    const handleDelete1 = (id) => {
        const updateRow = list.filter((item) => item.id !== id)
        setList(updateRow)
    }

    return (

        <div>
            <div className='box'>
                <div className='box-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='container'>
                            <div className='title'> <h4 >Employee details</h4>
                                <span className='expand'
                                    onClick={() => setIsvisisble(!isVisisble)}>{isVisisble ? '-collapse' : '+expand'}</span>
                            </div>
                            {isVisisble &&
                                <div>
                                    <div className='form-container'>
                                        <input type='text' placeholder='Id' name='empId'
                                            value={employee.empId} onChange={handleChange} />
                                        <input type='text' placeholder='First Name' name='firstname'
                                            value={employee.firstname} onChange={handleChange} />
                                        <input type='text' placeholder='Last Name' name='lastname'
                                            value={employee.lastname} onChange={handleChange} />
                                        <input type='text' placeholder='Email' name='email'
                                            value={employee.email} onChange={handleChange} />
                                        <select name='gender' onChange={handleChange}
                                            value={employee.gender} style={{ paddingLeft: '8px' }}>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                        <input type='text' placeholder='Role' name='role'
                                            value={employee.role} onChange={handleChange} />
                                    </div>
                                </div>
                            }


                        </div>
                        <div className='container1'>
                            <div className='title'>
                                <div className='title'>
                                    <h4>Add Experience</h4>
                                    <span style={{ paddingLeft: '8px' }} onClick={addEmp}>
                                        +
                                    </span>
                                </div>
                                <span className='expand'
                                    onClick={() => setSelected(!selected)}>{selected ? '-collapse' : '+expand'}

                                </span>
                            </div>
                            {
                                selected &&
                                <div>
                                    {
                                        addExperience.map((emp, i) => {
                                            return (
                                                <div className='container-box'>
                                                    <div className='btn-delete'>
                                                        <span className='delete'
                                                            onClick={() => { handleDelete(emp.id) }}>
                                                            <img style={{ width: '13px' }}
                                                                src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt='delete' />
                                                        </span>
                                                    </div>
                                                    <div className='form-container1'>
                                                        <input type='text' placeholder='Company' name='company'
                                                            value={emp.company} onChange={(e) => { handleExperienceChange(i, e) }} />
                                                        <input type='text' placeholder='Role' name='role1'
                                                            value={emp.role1} onChange={(e) => { handleExperienceChange(i, e) }} />
                                                        <input type='text' placeholder='Experience' name='experience' />

                                                        <select name='notice' onChange={(e) => { handleExperienceChange(i, e) }}
                                                            style={{ paddingLeft: '8px' }}>
                                                            <option>Immediately</option>
                                                            <option>7 Days</option>
                                                            <option>30 Days</option>
                                                            <option>60 Days</option>
                                                            <option>90 Days</option>
                                                        </select>

                                                        <input type='text' name='startDate' value={emp.startDate}
                                                            onChange={(e) => { handleExperienceChange(i, e) }}
                                                            onFocus={(e) => { e.target.type = 'date' }}
                                                            onBlur={(e) => { e.target.type = 'text' }}
                                                            placeholder='Start Date' />

                                                        <input type='text' name='endDate' value={emp.endDate}
                                                            onChange={(e) => { handleExperienceChange(i, e) }}
                                                            onFocus={(e) => { e.target.type = 'date' }}
                                                            onBlur={(e) => { e.target.type = 'text' }}
                                                            placeholder='End Date' />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }

                        </div>
                        <div id='submit'>
                            <button type='submit' id='btn-submit'>Submit</button>
                        </div>
                    </form>

                </div>
                <div >
                    <table id='emp-table'>
                        <tr>
                            <th>Emp Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                            {list.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.empId}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.role}</td>
                                        <td > <button id='edit'
                                            onClick={() => { handleEdit(item) }}><MdModeEdit
                                                style={{ width: '250%' }} />
                                        </button>
                                            <button id='edit1' onClick={() => { handleDelete1(item.id) }}>
                                                <img style={{ width: '9px' }}
                                                    src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt='delete' />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Task6
