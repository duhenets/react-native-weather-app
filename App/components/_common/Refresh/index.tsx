import React from 'react';
import { StRefreshControl, StScrollView } from './styled';

export type TProps = {
    children: React.ReactNode;
    onRefresh: () => void;
    refreshing: boolean;
};

const Refresh: React.FC<TProps> = ({ children, refreshing, onRefresh }) => (
    <StScrollView
        refreshControl={(
            <StRefreshControl
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        )}
    >
        {children}
    </StScrollView>
);

export default Refresh;
