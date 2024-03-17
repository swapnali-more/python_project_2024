useEffect(() => {
    if (
      isTemplateNameChanged ||
      isDataSourceChanged ||
      isAvailableFieldChanged ||
      isSelectedFieldSorted ||
      isAccountGroupSelected
    ) {
        if (validateSelectedDataField || validateInputs || invalidDate) {
            setDisableSaveButton(true);
            setIsFilterDropdownChanged(false);
          } else {
            setDisableSaveButton(false);
            setIsFilterDropdownChanged(false);
          }
    } else if (isFilterDropdownChanged) {
      if (validateSelectedDataField || validateInputs || invalidDate) {
        setDisableSaveButton(true);
        setIsFilterDropdownChanged(false);
      } else {
        setDisableSaveButton(false);
        setIsFilterDropdownChanged(false);
      }
    }
  }, [
    isTemplateNameChanged,
    isDataSourceChanged,
    isAvailableFieldChanged,
    isSelectedFieldSorted,
    isAccountGroupSelected,
    validateSelectedDataField,
    validateInputs,
    invalidDate,
    isFilterDropdownChanged,
    disableSaveButton,
  ]);

  useEffect(() => {
    const isIdMatches = selectionList?.length === preRequiredList?.length && preRequiredList?.every((id, index) => id === selectionList[index]);
    setIsAvailableFieldChanged(isIdMatches);
  }, [selectionList, preRequiredList, setIsAvailableFieldChanged]);

  useEffect(() => {
    if (customReportMode === EDIT) {
      if (isAvailableFieldChanged || isFilterDropdownChanged) {
          setFieldMuted(true);
          if (validateSelectedDataField || validateInputs) {
            setDisableSaveButton(true);
          } else {
            setDisableSaveButton(false);
          }
        } else {
          setFieldMuted(false);
        }
      } else {
        setFieldMuted(false);
        if (isAvailableFieldChanged || isFilterDropdownChanged) {
          setFieldMuted(true);
          if (validateSelectedDataField || validateInputs) {
            setDisableSaveButton(true);
          } else {
            setDisableSaveButton(false);
          }
        } else {
          setFieldMuted(false);
        }
      }
  }, [customReportMode, isAvailableFieldChanged, isFilterDropdownChanged, filterQuery, validateSelectedDataField, validateInputs]);
  