import Select from 'react-select';

const WeekdayPicker = ({ selectedWeekdays, setSelectedWeekdays }) => {
    const weekdaysOptions = [
        { value: 1, label: 'Monday' },
        { value: 2, label: 'Tuesday' },
        { value: 3, label: 'Wednesday' },
        { value: 4, label: 'Thursday' },
        { value: 5, label: 'Friday' },
        { value: 6, label: 'Saturday' },
        { value: 0, label: 'Sunday' },
    ];

    const handleWeekdaysChange = selectedOptions => {
        setSelectedWeekdays(selectedOptions);
    };

    return (
        <>
            <Select
                options={weekdaysOptions}
                isMulti
                value={selectedWeekdays}
                onChange={handleWeekdaysChange}
            />
        </>
    );
};

export default WeekdayPicker;
