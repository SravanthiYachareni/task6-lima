import React, { useState } from 'react'
import './task6.css'
import { MdModeEdit } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { GrFormView } from "react-icons/gr";



function Task6() {
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)
    const [addExperience, setExperiecne] = useState([])
    const [selected, setSelected] = useState(false)
    const [isVisisble, setIsvisisble] = useState(false)
    const [view, setView] = useState(false)
    const [employee, setEmployee] = useState({
        id: Date.now(),
        empId: '',
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        role: '',
    })
    const [search1, setSearch1] = useState({
        empId: '',
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        role: ''
    })
    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: [e.target.value] })
    }
    const handleSubmit = (e) => {
        e.preventDefault()


        if (employee.empId == '' || employee.firstname == '' || employee.lastname == '' || employee.email == '' || employee.gender == '' ||
            employee.role == '') {
            alert("Please fill out all fields.");
            return;
        }
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

    const [search, setSearch] = useState('')




    // Global Searching
    // const filteredEmployees = list.filter((employee) => {
    //     const searchBtn = search.toLowerCase();
    //     return (
    //         employee.empId.toString().toLowerCase().includes(searchBtn) ||
    //         employee.firstname.toString().toLowerCase().includes(searchBtn) ||
    //         employee.lastname.toString().toLowerCase().includes(searchBtn) ||
    //         employee.email.toString().toLowerCase().includes(searchBtn) ||
    //         employee.gender.toString().toLowerCase().includes(searchBtn) ||
    //         employee.role.toString().toLowerCase().includes(searchBtn)
    //     );
    // });

    console.log(search)
    const handleSearch = (e, name) => {
        setSearch1({ ...search1, [name]: e.target.value })

    }
    console.log(search1)

    const searchColumn = (search1.empId || search1.firstname || search1.lastname || search1.email
        || search1.gender || search1.role) ?
        list.filter((item) =>
            Object.keys(search1).filter(
                (key) => item[key].toString().toLowerCase().includes(search1[key].toLowerCase())
            ).length === Object.keys(search1).length
        ) : list
    // const searchColumn = list.filter((item)=>Object.keys(search1).filter(
    //     (key) => item[key].toString().toLowerCase().includes(search1[key].toLowerCase())
    // ))
        const handleView = (item) => {

        }

    return (

        <div>
            <div className='box'>
                <div className='box-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='container'>
                            <div className='title'> <h4 >Employee details</h4>
                                <span className='expand'
                                    onClick={() => setIsvisisble(!isVisisble)}>{isVisisble ? '-collapse' : '+expand'}
                                </span>
                            </div>
                            {isVisisble &&
                                <div>
                                    <div className='form-container'>
                                        <input type='text' placeholder='Id' name='empId' required
                                            value={employee.empId} onChange={handleChange} />

                                        <input type='text' placeholder='First Name' name='firstname' required
                                            value={employee.firstname} onChange={handleChange} />

                                        <input type='text' placeholder='Last Name' name='lastname' required
                                            value={employee.lastname} onChange={handleChange} />

                                        <input type='text' placeholder='Email' name='email' required
                                            value={employee.email} onChange={handleChange} />

                                        <select name='gender' onChange={handleChange} value={employee.gender}
                                            required style={{ paddingLeft: '8px', width: '304px' }}>
                                            <option defaultValue=''>Gender</option>
                                            <option >Male</option>
                                            <option>Female</option>
                                            <option >Others</option>
                                        </select>
                                        <input type='text' placeholder='Role' name='role' required
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
                                                        <input type='text' placeholder='Company' name='company' required
                                                            value={emp.company} onChange={(e) => { handleExperienceChange(i, e) }} />
                                                        <input type='text' placeholder='Role' name='role1' required
                                                            value={emp.role1} onChange={(e) => { handleExperienceChange(i, e) }} />
                                                        <input type='text' placeholder='Experience' name='experience' />

                                                        <select name='notice' onChange={(e) => { handleExperienceChange(i, e) }} required
                                                            style={{ paddingLeft: '8px', width: '304px' }}>
                                                            <option defaultValue=''>Notice Period</option>
                                                            <option>Immediately</option>
                                                            <option>7 Days</option>
                                                            <option>30 Days</option>
                                                            <option>60 Days</option>
                                                            <option>90 Days</option>
                                                        </select>

                                                        <input type='text' name='startDate' value={emp.startDate}
                                                            onChange={(e) => { handleExperienceChange(i, e) }} required
                                                            onFocus={(e) => { e.target.type = 'date' }}
                                                            onBlur={(e) => { e.target.type = 'text' }}
                                                            placeholder='Start Date' />

                                                        <input type='text' name='endDate' value={emp.endDate} required
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
                {/* <div className='globalsearch'>
                    <input type='text' placeholder='search..' onChange={(e) => setSearch(e.target.value)} />

                </div> */}
                <div >
                    <table id='emp-table'>
                        <tr>
                            <th>Emp Id </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td className='search'>
                                    <input className='search'
                                        type="text" value={search1.empId}
                                        placeholder='search'
                                        onChange={(e) => handleSearch(e, "empId")} />
                                </td>
                                <td className='search'>
                                    <input type='text' value={search1.firstname}
                                        placeholder='search'
                                        onChange={(e) => handleSearch(e, "firstname")} />
                                </td>
                                <td className='search'>
                                    <input type='text' value={search1.lastname} placeholder='search'
                                        onChange={(e) => handleSearch(e, "lastname")} />
                                </td>
                                <td className='search'>
                                    <input type='text' value={search1.email} placeholder='search'
                                        onChange={(e) => handleSearch(e, "email")} />
                                </td>
                                <td className='search'>
                                    <input type='text' value={search1.gender} placeholder='search'
                                        onChange={(e) => handleSearch(e, "gender")} />
                                </td>
                                <td className='search'>
                                    <input type='text' value={search1.role} placeholder='search'
                                        onChange={(e) => handleSearch(e, "role")} />
                                </td>
                            </tr>
                            {searchColumn
                                .map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{item.empId}</td>
                                            <td>{item.firstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.role}</td>
                                            <td >
                                                <span id='edit'
                                                    onClick={() => { handleEdit(item) }}>
                                                    <MdModeEdit style={{ width: '40%' }} />
                                                </span>
                                                <span id='edit1' onClick={() => { handleDelete1(item.id) }}>
                                                    <MdOutlineDelete style={{ width: '40%', height: '15px' }} />
                                                </span>
                                                <span id='view' onClick={handleView(item)}>
                                                    <GrFormView style={{ width: '20%', height: '15px' }} />
                                                </span>
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
