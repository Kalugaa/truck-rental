import { useState } from 'react'
import svg from '../../assets/sprite.svg'

import { FilterTitle, Hr, Input, Label, Text, Svg, FilterList, FilterListItem, CheckboxLabel, Checkbox, Form, RadioBtn, SubmitButton, ResetFilterButton } from './Filter.styled'

const Filter = ({ handleFilterChange, handleResetFilter }) => {
    const [location, setLocation] = useState('')
    const [details, setDetails] = useState({
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
    })

    const [form, setForm] = useState('')
    const [isFilterUsed, setIsFilterUsed] = useState(false);

    const handleLocationChange = (e) => {
        const { value } = e.target
        setIsFilterUsed(true)
        setLocation(value)

    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setIsFilterUsed(true)
        setDetails({ ...details, [name]: checked });

    }

    const handleRadioChange = (e) => {
        const { value } = e.target
        setIsFilterUsed(true)
        setForm(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const filter = { location, details, form };
        setIsFilterUsed(true)
        handleFilterChange(filter);
    }

    const resetFilter = (e) => {
        e.preventDefault()
        setLocation('')
        setDetails({ ac: false, automatic: false, kitchen: false, tv: false, bathroom: false })
        setForm('')
        setIsFilterUsed(false)
        handleResetFilter()
    }



    return (
        <>
            <Form>

                <Label>Location
                    <Svg className='map' width={18} height={20}>
                        <use href={`${svg}#icon-map`} />
                    </Svg>
                    <Input type='text' placeholder="City" name='filter' value={location} onChange={handleLocationChange} />
                </Label>

                <Text>Filters</Text>
                <FilterTitle>Vehicle equipment</FilterTitle>
                <Hr />

                <FilterList>

                    <FilterListItem>
                        <Checkbox type='checkbox'
                            id='ac'
                            name='ac'
                            onChange={handleCheckboxChange}
                            value={details.ac}
                            checked={details.ac ? 'checked' : ''}

                        />
                        <CheckboxLabel htmlFor='ac'>
                            <Svg width={32} height={32}>
                                <use href={`${svg}#icon-ac`} />
                            </Svg>
                            AC
                        </CheckboxLabel>
                    </FilterListItem>

                    <FilterListItem>
                        <Checkbox type='checkbox'
                            id='automatic'
                            name='automatic'
                            onChange={handleCheckboxChange}
                            value={details.automatic}
                            checked={details.automatic ? 'checked' : ''}
                        />
                        <CheckboxLabel htmlFor='automatic' >
                            <Svg width={32} height={32}>
                                <use href={`${svg}#icon-transmission`} />
                            </Svg>
                            Automatic
                        </CheckboxLabel>
                    </FilterListItem>

                    <FilterListItem>
                        <Checkbox type='checkbox'
                            id='kitchen'
                            name='kitchen'
                            onChange={handleCheckboxChange}
                            value={details.kitchen}
                            checked={details.kitchen ? 'checked' : ''}
                        />                        <CheckboxLabel htmlFor='kitchen' >
                            <Svg width={32} height={32}>
                                <use href={`${svg}#icon-kitchen`} />
                            </Svg>
                            Kitchen
                        </CheckboxLabel>
                    </FilterListItem>

                    <FilterListItem>
                        <Checkbox type='checkbox'
                            id='tv'
                            name='tv'
                            onChange={handleCheckboxChange}
                            value={details.tv}
                            checked={details.tv ? 'checked' : ''}
                        />                        <CheckboxLabel htmlFor='tv' >
                            <Svg width={32} height={32}>
                                <use href={`${svg}#icon-tv`} />
                            </Svg>
                            TV
                        </CheckboxLabel>
                    </FilterListItem>

                    <FilterListItem>
                        <Checkbox type='checkbox'
                            id='bathroom'
                            name='bathroom'
                            onChange={handleCheckboxChange}
                            value={details.bathroom}
                            checked={details.bathroom ? 'checked' : ''}
                        />                        <CheckboxLabel htmlFor='bathroom' >
                            <Svg width={32} height={32}>
                                <use href={`${svg}#icon-shower`} />
                            </Svg>
                            Shower/WC
                        </CheckboxLabel>
                    </FilterListItem>

                </FilterList>

                <FilterTitle>Vehicle type</FilterTitle>
                <Hr />

                <FilterList className='vehicle-type'>

                    <FilterListItem>
                        <RadioBtn type='radio' id='panelTruck' name='form' onChange={handleRadioChange} value="panelTruck" checked={form === "panelTruck" ? 'checked' : ''} />
                        <CheckboxLabel htmlFor='panelTruck' >
                            <Svg width={40} height={28}>
                                <use href={`${svg}#icon-camper1`} />
                            </Svg>
                            Van
                        </CheckboxLabel>
                    </FilterListItem>

                    <FilterListItem>
                        <RadioBtn type='radio' id='fullyIntegrated' name='form' onChange={handleRadioChange} value="fullyIntegrated" checked={form === "fullyIntegrated" ? 'checked' : ''} />
                        <CheckboxLabel htmlFor='fullyIntegrated' >
                            <Svg width={40} height={28}>
                                <use href={`${svg}#icon-camper2`} />
                            </Svg>
                            Fully Integrated
                        </CheckboxLabel>
                    </FilterListItem>

                    <FilterListItem>
                        <RadioBtn type='radio' id='alcove' name='form' onChange={handleRadioChange} value="alcove" checked={form === "alcove" ? 'checked' : ''} />
                        <CheckboxLabel htmlFor='alcove' >
                            <Svg width={40} height={28}>
                                <use href={`${svg}#icon-camper3`} />
                            </Svg>
                            Alcove
                        </CheckboxLabel>
                    </FilterListItem>

                </FilterList>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <SubmitButton onClick={handleSubmit}>Search</SubmitButton>
                    {isFilterUsed && <ResetFilterButton onClick={resetFilter}>reset filter</ResetFilterButton>}
                </div>
            </Form>
        </>
    )
}

export default Filter