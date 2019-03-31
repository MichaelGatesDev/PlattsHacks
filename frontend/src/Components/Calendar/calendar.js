import React from "react";

const Calendar = props => {
  if (props.visible == "false") {
    return null;
  } else
    return (
      <div className="calendarContainer">
        <div className="CalendarBox">
          <iframe
            src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=ub2amd2rm2ibre7k5vtaiiout0%40group.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FNew_York"
            width="450"
            height="400"
            frameborder="0"
            scrolling="no"
          />
        </div>
      </div>
    );
};

export default Calendar;
