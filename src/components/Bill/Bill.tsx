import { useDispatch, useSelector } from "react-redux/es/exports";
//=============================================
import {
    InputContainer,
    Title,
    Alert,
    Wrapper,
    Input,
    Img
} from '../../styles/components';
//=============================================
import dollarIcon from '../../assets/images/icon-dollar.svg';
import { setBillState } from "../../redux/slice";
import { selectBill } from "../../redux/slice";


const Bill = () => {
    const dispatch = useDispatch();
    const bill = useSelector(selectBill);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? null : +e.target.value;
        if (value !== null && !(0 <= value)) return;
        dispatch(setBillState(value));
    };

    return (
        <InputContainer>
            <Title>Bill</Title>
            <Alert zero={bill === 0}>Can’t be zero</Alert>
            <Wrapper>
                <Input
                    onChange={handleChange}
                    value={bill ?? ''}
                    zero={bill === 0}
                />
                <Img src={dollarIcon} alt="dollarIcon" />
            </Wrapper>
        </InputContainer>
    );
}

export default Bill; 