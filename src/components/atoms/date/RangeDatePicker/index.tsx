import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import { Moment } from "moment";

import { Container } from "./styles";

const handleDayConstants = (day: any) => {
  day._locale._weekdaysMin = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  return day.format("D");
};

interface IValues {
  startDate: Moment | null;
  endDate: Moment | null;
}

interface IHasErrorValues {
  startDate: boolean;
  endDate: boolean;
}

interface IRangeDatePicker {
  startPlaceholder?: string;
  endPlaceholder?: string;
  startDate: Moment | null;
  endDate: Moment | null;
  focusedDate: any;
  setFocusedDate: any;
  setStartDate: (date: Moment | null) => void;
  setEndDate: (date: Moment | null) => void;
  width?: string;
  ref?: any;
  disabled?: boolean;
  value?: IValues;
  hasError?: IHasErrorValues;
}

const RangeDatePicker: React.FC<IRangeDatePicker> = ({
  startPlaceholder,
  endPlaceholder,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  focusedDate,
  setFocusedDate,
  width,
  ref,
  disabled,
  value,
  hasError,
}: IRangeDatePicker) => {
  const [initialState, setInitialState] = useState<boolean>(true);
  const MOBILE_DEVICE = window.matchMedia("(max-width: 480px)").matches;

  const handleDateChange = ({ startDate: start, endDate: end }: IValues) => {
    if (start && end) {
      setInitialState(false);
    }

    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Container
      width={width}
      value={value}
      hasError={hasError}
      initialState={initialState}
    >
      <DateRangePicker
        orientation={MOBILE_DEVICE ? "vertical" : "horizontal"}
        isOutsideRange={() => false}
        minimumNights={0}
        noBorder
        renderDayContents={handleDayConstants}
        disabled={disabled}
        ref={ref}
        startDatePlaceholderText={startPlaceholder}
        startDate={startDate}
        startDateId="start_date_id"
        endDatePlaceholderText={endPlaceholder}
        endDate={endDate}
        endDateId="end_date_id"
        onDatesChange={handleDateChange}
        focusedInput={focusedDate}
        onFocusChange={(focusedInput) => setFocusedDate(focusedInput)}
      />
    </Container>
  );
};

RangeDatePicker.defaultProps = {
  startPlaceholder: "Data de início",
  endPlaceholder: "Data de fim",
};

export default RangeDatePicker;
