import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = props => {
    return(
        <div className={classes.form}>
            <Input label="item" input={{}} />
            <button>+ Add</button>
        </div>
    )
}

export default MealItemForm;