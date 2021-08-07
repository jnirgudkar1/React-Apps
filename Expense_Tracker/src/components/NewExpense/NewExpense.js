import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    const [isEditing, setIsEditing] = useState(false);

    const onStartEditHandler = () => {
        setIsEditing(true);
    }

    const onStopEditHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={onStartEditHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onStopEditHandler} />}
        </div>
    )
}

export default NewExpense;