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
import personIcon from '../../assets/images/icon-person.svg';
import { setPeopleState, selectPeople } from '../../redux/slice';

const People = () => {
    const dispatch = useDispatch();
    const person = useSelector(selectPeople);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? null : +e.target.value;
        if (value !== null && !(0 <= value)) return;
        dispatch(setPeopleState(value));
    };

    return (
        <InputContainer>
            <Title>Number of People</Title>
            <Alert zero={person === 0}>Can’t be zero</Alert>
            <Wrapper>
                <Input
                    onChange={handleChange}
                    value={person ?? ''}
                    zero={person === 0}
                />
                <Img src={personIcon} alt="personIcon" />
            </Wrapper>
        </InputContainer>
    );
}

export default People;