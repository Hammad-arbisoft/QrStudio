import React, { useMemo } from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconAdd } from '@/assets';
import { IconDelete } from '@/assets';
import { Collapsable } from '../Collapsable';
import theme from '@/theme';
import { StyledContainer, StyledDeleteButton, TemplateItem, TemplatesContainer } from './styled';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const TemplateSideBar = ({
    oncreateNewTemplate,
    languageLocale,
    onDeleteCustomTemplate,
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
                        <StyledDeleteButton
                            onClick={e => {
                                e.stopPropagation(); // ⛔ Prevents parent onClick
                                onDeleteCustomTemplate?.(item);
                            }}
                        >
                            <StyledImage src={IconDelete} height={24} />
                        </StyledDeleteButton>
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
                text={TEXT_DICTIONARY?.[languageLocale]?.NEW_TEMPLATE}
                left={<StyledImage src={IconAdd} />}
                marginBottom={38}
                onClick={() => oncreateNewTemplate()}
            />
            <Collapsable
                title={TEXT_DICTIONARY?.[languageLocale]?.DEFAULT}
                content={renderDefaultContent}
            />
            <Collapsable
                title={TEXT_DICTIONARY?.[languageLocale]?.CUSTOM_TEMPLATES}
                content={renderCustomContent}
            />
        </StyledContainer>
    );
};

TemplateSideBar.propTypes = propTypes;
