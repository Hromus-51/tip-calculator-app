import { motion } from "framer-motion";
//=============================================
import Bill from "../Bill/Bill";
import Tip from "../Tip/Tip";
import People from "../People/People";
import Result from "../Result/Result";
import {
    CalculatorEl,
    Container,
    Wrapper,
    Header,
    Interface,
    DataInputBlock,
    DataDisplay
} from './styledComponets';
//=============================================
import logo from '../../assets/images/logo.svg';

const Calculator = () => {
    return (
        <CalculatorEl>
            <Container>
                <Wrapper>

                    <Header>
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            src={logo}
                            alt="logo"
                        />
                    </Header>

                    <Interface
                        initial={{ opacity: 0, y: 70 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            opacity: {
                                duration: 0.6, delay: 0.3
                            },
                            y: {
                                duration: 0.7, delay: 0.2
                            }
                        }}>
                        <DataInputBlock>
                            <Bill />
                            <Tip />
                            <People />
                        </DataInputBlock>

                        <DataDisplay>
                            <Result />
                        </DataDisplay>
                    </Interface>

                </Wrapper>
            </Container>
        </CalculatorEl>
    );
}

export default Calculator;