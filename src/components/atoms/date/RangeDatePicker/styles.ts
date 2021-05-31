import styled from "styled-components";
import { Calendar } from "@styled-icons/feather";
import { Moment } from "moment";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles.css";

import colors from "../../../../styles/colors";

type IconContainerProps = {
  focused: boolean;
};

interface IHasErrorValues {
  startDate: boolean;
  endDate: boolean;
}

interface IValues {
  startDate: Moment | null;
  endDate: Moment | null;
}

interface IContainerProps {
  width?: string;
  value: IValues | undefined;
  hasError: IHasErrorValues | undefined;
  initialState: boolean;
}

export const Container = styled.div`
  width: ${(props: IContainerProps) => (props.width ? props.width : "100%")};

  display: flex;
  margin-left: 5px;
  z-index: 1;

  @media only screen and (max-width: 480px) {
    margin-left: 0px;
  }

  input#start_date_id,
  input#end_date_id {
    border: 1px solid
      ${(props: IContainerProps) => {
        let color: string;

        if (!props?.initialState) {
          if (!props?.value?.startDate || !props?.value?.endDate) {
            color = colors.warning;
          } else if (props?.value?.startDate && props?.value?.endDate) {
            color = colors.blueEinstein;
          } else {
            color = "#e3e4e6";
          }
        } else {
          color = "#e3e4e6";
        }

        return color;
      }} !important;
  }

  .DateInput.DateInput_1::after {
    border: 1px solid
      ${(props: IContainerProps) => {
        let color: string;

        if (!props?.initialState) {
          if (!props?.value?.startDate || !props?.value?.endDate) {
            color = colors.warning;
          } else if (props?.value?.startDate && props?.value?.endDate) {
            color = colors.blueEinstein;
          } else {
            color = "#e3e4e6";
          }
        } else {
          color = "#e3e4e6";
        }

        return color;
      }} !important;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 48px;
  margin-left: -2px;
  background: ${(props: IconContainerProps) =>
    props.focused ? colors.darkblue : colors.white};
  border: solid 1px ${colors.darkblue};
  border-radius: 0px 3px 3px 0px;
`;

export const CalendarIcon: any = styled(Calendar).attrs({
  size: 20,
})`
  color: ${(props: any) => (props.focused ? colors.white : colors.darkblue)};
`;
