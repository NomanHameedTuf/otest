import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('api/users').then(response => {
            console.log('asdfasd', response.data)

            this.setState({
                users: response.data
            })
        })
    }

    render() {
        const { users } = this.state
        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'>All Users</div>
                            <div className='card-body'>
                                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                                    Create new User
                    </Link>
                                <ul className='list-group list-group-flush'>
                                    {users.map(user => (
                                        <Link
                                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                            to={`/${user.userid}`}
                                            key={user.userid}
                                        >
                                            {user.uname}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users