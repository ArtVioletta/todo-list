import React, { Component } from 'react'

import './TodoListItem.css'

export default class TodoListItem extends Component {
    render() {
        const {
            label,
            important,
            done,
            onDeleted,
            id,
            onToggleDone,
            onToggleImportant,
        } = this.props

        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" onClick={onToggleDone}>
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={() => onDeleted(id)}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}
