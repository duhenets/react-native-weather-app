import React from 'react';
import { TCurrent } from 'api/requests/Weather/types';
import {
    StCurrentInfo,
    StCurrentInfoCondition,
    StCurrentInfoConditionView,
    StCurrentInfoIcon,
    StCurrentInfoTemp,
    StCurrentInfoTempC,
    StCurrentInfoTempView,
} from './styled';

export type TProps = { current: TCurrent };

const CurrentInfo: React.FC<TProps> = ({ current }) => {
    const source = { uri: `https:${current.condition.icon}` };

    return (
        <StCurrentInfo>
            <StCurrentInfoTempView>
                <StCurrentInfoTemp>{current.temp_c}</StCurrentInfoTemp>
                <StCurrentInfoTempC> °C</StCurrentInfoTempC>
            </StCurrentInfoTempView>
            <StCurrentInfoConditionView>
                <StCurrentInfoIcon source={source}/>
                <StCurrentInfoCondition>{current.condition.text}</StCurrentInfoCondition>
            </StCurrentInfoConditionView>
        </StCurrentInfo>
    );
};

export default CurrentInfo;
