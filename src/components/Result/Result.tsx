import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//=============================================
import { selectAll, setAmountState, setTotalState, reset } from '../../redux/slice';
//=============================================
import {
    ResultContainer,
    SumContainer,
    AmountContainer,
    TitleBlock,
    Title,
    Subtitle,
    Sum,
    ButtonReset
} from './styledComponents';

const Result = () => {
    const { bill, percent, people, amount, total } = useSelector(selectAll);
    const dispatch = useDispatch();
    const numeral = require('numeral');

    useEffect(() => {
        if (bill && people) {
            const billPerson = bill / people;
            const percentPerson = billPerson / 100 * (percent ?? 0);

            dispatch(setAmountState(percentPerson))
            dispatch(setTotalState(billPerson + percentPerson))
        }

    }, [bill, percent, people])

    return (
        <ResultContainer>

            <SumContainer>
                <AmountContainer>
                    <TitleBlock>
                        <Title>Tip Amount</Title>
                        <Subtitle>/ person</Subtitle>
                    </TitleBlock>
                    <Sum >
                        {numeral(amount).format('$0,0.00')}
                    </Sum>
                </AmountContainer>

                <AmountContainer>
                    <TitleBlock>
                        <Title>Total</Title>
                        <Subtitle>/ person</Subtitle>
                    </TitleBlock>
                    <Sum >
                        {numeral(total).format('$0,0.00')}
                    </Sum>
                </AmountContainer>
            </SumContainer>

            <ButtonReset
                reset={amount > 0 || total > 0}
                onClick={() => { dispatch(reset()) }}>
                RESET
            </ButtonReset>
        </ResultContainer>
    );
}

export default Result;