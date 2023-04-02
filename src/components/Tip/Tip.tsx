import { useDispatch, useSelector } from "react-redux";
//=============================================
import {
    TipContainer,
    Grid,
    ButtonTip,
    Input
} from './styledComponents';
import { Title } from '../../styles/components';
//=============================================
import { setPercentState, setCustomState, selectAll } from '../../redux/slice';

const percentButtons = [5, 10, 15, 25, 50];

const Tip = () => {
    const dispatch = useDispatch();
    const { percent, custom } = useSelector(selectAll);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? null : +e.target.value;
        if (value !== null && !(0 <= value && value <= 100)) return;
        dispatch(setCustomState(value));
    };

    return (
        <TipContainer>
            <Title>Select Tip %</Title>
            <Grid>
                {percentButtons.map(item => (
                    <ButtonTip
                        key={item}
                        onClick={() => { dispatch(setPercentState(item)) }}
                        selected={item === percent}>
                        {`${item}%`}
                    </ButtonTip>
                ))}

                <Input
                    onChange={handleChange}
                    value={custom ?? ''}
                />
            </Grid>
        </TipContainer>
    );
}

export default Tip;