import React from "react";

import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    if(props.items.length === 0)
        return <h2 className="expenses-list__fallback">Found no expenses</h2>

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
            <ExpenseItem
            //We add key because react adds new item to the bottom of the list
            //and then copies each item one step below to make room for new item on top
            //this is not effective and use of key prevents that
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            ))}
        </ul>
    )
}

export default ExpensesList;