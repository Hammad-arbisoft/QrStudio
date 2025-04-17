import React, { useMemo } from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconAdd } from '@/assets';
import { Collapsable } from '../Collapsable';
import theme from '@/theme';
import { StyledContainer, TemplateItem, TemplatesContainer } from './styled';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const TemplateSideBar = ({
    oncreateNewTemplate,
    translation,
    defaultTemplatesList,
    customTemplatesList,
}) => {
    const renderDefaultContent = useMemo(() => {
        return (
            <TemplatesContainer>
                {defaultTemplatesList?.map((item, index) => (
                    <TemplateItem
                        key={index}
                        onClick={() => {
                            oncreateNewTemplate(item?.elements);
                        }}
                    >
                        <StyledImage
                            src={item?.image}
                            maxHeight={125}
                            maxWidth={115}
                            borderRadius={6}
                        />
                        <StyledText
                            color={theme.color.gray_A1A1A1}
                            fontSize={10}
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: 115,
                            }}
                        >
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
                {customTemplatesList?.map((item, index) => (
                    <TemplateItem
                        key={index}
                        onClick={() => {
                            oncreateNewTemplate(item?.elements);
                        }}
                    >
                        <StyledImage
                            src={item?.image}
                            maxHeight={125}
                            maxWidth={115}
                            borderRadius={6}
                        />
                        <StyledText
                            color={theme.color.gray_A1A1A1}
                            fontSize={10}
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: 115,
                            }}
                        >
                            {item?.title}
                        </StyledText>
                    </TemplateItem>
                ))}
            </TemplatesContainer>
        );
    }, []);

    return (
        <StyledContainer>
            <Button
                text={translation?.NEW_TEMPLATE || TEXT_DICTIONARY?.NEW_TEMPLATE}
                left={<StyledImage src={IconAdd} />}
                marginBottom={38}
                onClick={() => oncreateNewTemplate()}
            />
            <Collapsable
                title={translation?.DEFAULT || TEXT_DICTIONARY?.DEFAULT}
                content={renderDefaultContent}
            />
            <Collapsable
                title={translation?.CUSTOM_TEMPLATES || TEXT_DICTIONARY?.CUSTOM_TEMPLATES}
                content={renderCustomContent}
            />
        </StyledContainer>
    );
};

TemplateSideBar.propTypes = propTypes;
