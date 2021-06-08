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

interface IRangeDatePicker {
  startDate: Moment | null;
  endDate: Moment | null;
  setStartDate: (date: Moment | null) => void;
  setEndDate: (date: Moment | null) => void;
  width?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  disabled?: boolean;
  hasError?: boolean;
}

/**
 * @FIXME:
 * startDate, endDate: Moment
 *
 * Using moment for type because react-dates dependency.
 */
const RangeDatePicker: React.FC<IRangeDatePicker> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  width,
  startPlaceholder,
  endPlaceholder,
  disabled,
  hasError,
}: IRangeDatePicker) => {
  const [focusedDate, setFocusedDate] =
    useState<"startDate" | "endDate" | null>(null);

  const MOBILE_DEVICE = window.matchMedia("(max-width: 480px)").matches;

  const handleDateChange = ({ startDate: start, endDate: end }: IValues) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Container width={width} value={{ startDate, endDate }} hasError={hasError}>
      <DateRangePicker
        orientation={MOBILE_DEVICE ? "vertical" : "horizontal"}
        isOutsideRange={() => false}
        minimumNights={0}
        noBorder
        renderDayContents={handleDayConstants}
        disabled={disabled}
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
