import "react-datepicker/dist/react-datepicker.module.css";
import "./styles.css";
import ReactDatePicker from "react-datepicker";
import svg from "../../assets/sprite.svg";
const Calendar = ({ setDate, date }) => {

    return (
        <div className="calendarWrapper">
            <svg className="calendarIcon" width={20} height={20}>
                <use href={`${svg}#icon-date`} />
            </svg>
            <ReactDatePicker
                minDate={new Date()}
                useWeekdaysShort={true}
                required
                selected={date}
                onChange={(date) => setDate(date)}
                showPopperArrow={false}
                popperPlacement="bottom-right"
                calendarStartDay={1}
                placeholderText="Booking date"
            ></ReactDatePicker>
        </div>
    );
};

export default Calendar;