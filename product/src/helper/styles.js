// Style - Helper
const breakPoints = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

export function addToClass(cls, variantMap, value, defaultValue) {
	if (value !== defaultValue && variantMap[value]) {
		cls[variantMap[value]] = true;
	}
}

export function mediaBreak(breakPoint, css) {
	if (breakPoint) {
		return `@media (min-width: ${breakPoints[breakPoint]}px) {
			${css};
		}`;
	}
	return '';
}

export const customStyles = {
	control: (provided, state) => ({
	  ...provided,
	  background: '#fff',
	  borderColor: '#ced4da',
	  minHeight: '38px',
	  height: '38px',
	  boxShadow: state.isFocused ? null : null,
	}),
  
	valueContainer: (provided, state) => ({
	  ...provided,
	  height: '38px',
	  padding: '0 6px'
	}),
  
	input: (provided, state) => ({
	  ...provided,
	  margin: '0px',
	}),
	indicatorSeparator: state => ({
	  display: 'none',
	}),
	indicatorsContainer: (provided, state) => ({
	  ...provided,
	  height: '38px',
	}),
  };