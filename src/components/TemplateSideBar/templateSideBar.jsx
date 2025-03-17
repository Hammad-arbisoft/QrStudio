import React, { useMemo } from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import {
    IconAdd,
    ImageCustomTemplate1,
    ImageCustomTemplate2,
    ImageTemplate1,
    ImageTemplate2,
} from '@/assets';
import { Collapsable } from '../Collapsable';
import theme from '@/theme';
import { StyledContainer, TemplateItem, TemplatesContainer } from './styled';

export const TemplateSideBar = () => {
    const defaultTemplatesList = useMemo(() => {
        return [
            { image: ImageTemplate1, title: 'temp-name', onClick: () => {} },
            { image: ImageTemplate2, title: 'temp-name', onClick: () => {} },
        ];
    }, []);

    const CustomTemplatesList = useMemo(() => {
        return [
            { image: ImageCustomTemplate1, title: 'Custom temp-1', onClick: () => {} },
            { image: ImageCustomTemplate2, title: 'Custom2', onClick: () => {} },
        ];
    }, []);

    const renderDefaultContent = useMemo(() => {
        return (
            <TemplatesContainer>
                {defaultTemplatesList?.map((item, index) => (
                    <TemplateItem key={index}>
                        <StyledImage src={item?.image} />
                        <StyledText color={theme.color.gray_A1A1A1} fontSize={10}>
                            {item?.title}
                        </StyledText>
                    </TemplateItem>
                ))}
            </TemplatesContainer>
        );
    }, []);

    const renderCustomContent = useMemo(() => {
        return (
            <TemplatesContainer>
                {CustomTemplatesList?.map((item, index) => (
                    <TemplateItem key={index}>
                        <StyledImage src={item?.image} />
                        <StyledText color={theme.color.gray_A1A1A1} fontSize={10}>
                            {item?.title}
                        </StyledText>
                    </TemplateItem>
                ))}
            </TemplatesContainer>
        );
    }, []);

    return (
        <StyledContainer>
            <Button text="New Template" left={<StyledImage src={IconAdd} />} marginBottom={38} />
            <Collapsable title="Default" content={renderDefaultContent} />
            <Collapsable title="Custom Templates" content={renderCustomContent} />
        </StyledContainer>
    );
};

TemplateSideBar.propTypes = propTypes;
