import React, { Component } from 'react'

export default class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ]
    render() {
        const { filter, onFilterChange } = this.props
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    type="button"
                    onClick={() => onFilterChange(name)}
                    className={`btn ${clazz}`}
                    key={name}
                >
                    {label}
                </button>
            )
        })
        return <div className="btn-group">{buttons}</div>
    }
}
