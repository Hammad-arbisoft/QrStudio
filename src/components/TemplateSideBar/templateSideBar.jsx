import React, { useMemo } from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconAdd, IconInfo } from '@/assets';
import { IconDelete } from '@/assets';
import { Collapsable } from '../Collapsable';
import theme from '@/theme';
import { StyledContainer, StyledDeleteButton, TemplateItem, TemplatesContainer } from './styled';
import { TEXT_DICTIONARY } from '@/constants/textConstants';
import { RadioSection } from '../RadioSection';
import { Tooltip } from '../Tooltip';

export const TemplateSideBar = ({
    oncreateNewTemplate,
    languageLocale,
    onDeleteCustomTemplate,
    defaultTemplatesList,
    customTemplatesList,
    onTemplateSelect,
    isLocationTextActive,
    onToggleLocationText,
    showQrIdToggle,
    isQrIdTextActive,
    onToggleQrIdText,
}) => {
    const renderDefaultContent = useMemo(() => {
        return (
            <TemplatesContainer>
                {defaultTemplatesList?.map((item, index) => (
                    <TemplateItem
                        key={index}
                        onClick={() => {
                            oncreateNewTemplate(item?.elements);
                            if (typeof onTemplateSelect === 'function') {
                                onTemplateSelect(item?.id);
                            }
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
                            if (typeof onTemplateSelect === 'function') {
                                onTemplateSelect(item?.id);
                            }
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
                marginBottom={20}
                onClick={() => oncreateNewTemplate()}
            />
            <div style={{ display: 'grid', gap: 12, marginBottom: 18 }}>
                <RadioSection
                    text={
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                marginRight: '16px',
                            }}
                        >
                            <StyledText>
                                {TEXT_DICTIONARY?.[languageLocale]?.SHOW_PROPERTY_LOCATION ||
                                    'Show Property Label'}
                            </StyledText>
                            <Tooltip
                                text={TEXT_DICTIONARY?.[languageLocale]?.LOCATION_HELPER}
                                position="top"
                            >
                                <StyledImage src={IconInfo} />
                            </Tooltip>
                        </div>
                    }
                    isActive={!!isLocationTextActive}
                    onToggle={onToggleLocationText}
                    disabled={false}
                />

                {showQrIdToggle ? (
                    <>
                        <RadioSection
                            text={
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginRight: '16px',
                                    }}
                                >
                                    <StyledText>
                                        {TEXT_DICTIONARY?.[languageLocale]?.SHOW_QR_ID ||
                                            'Show QR Id'}
                                    </StyledText>
                                    <Tooltip
                                        text={TEXT_DICTIONARY?.[languageLocale]?.QR_ID_HELPER}
                                        position="top"
                                    >
                                        <StyledImage src={IconInfo} />
                                    </Tooltip>
                                </div>
                            }
                            isActive={!!isQrIdTextActive}
                            onToggle={onToggleQrIdText}
                            disabled={false}
                        />
                    </>
                ) : null}
            </div>

            <Collapsable
                title={TEXT_DICTIONARY?.[languageLocale]?.DEFAULT}
                content={renderDefaultContent}
            />
            {customTemplatesList.length > 0 && (
                <Collapsable
                    title={TEXT_DICTIONARY?.[languageLocale]?.CUSTOM_TEMPLATES}
                    content={renderCustomContent}
                />
            )}
        </StyledContainer>
    );
};

TemplateSideBar.propTypes = propTypes;
