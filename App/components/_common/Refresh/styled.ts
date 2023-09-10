import styled from 'styled-components/native';

export const StScrollView = styled.ScrollView.attrs({
    contentContainerStyle: { flex: 1 },
})``;

export const StRefreshControl = styled.RefreshControl.attrs(({ theme }) => ({
    progressBackgroundColor: theme.SECONDARY_COLOR,
    colors: [theme.PRIMARY_COLOR],
}))``;
