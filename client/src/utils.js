//convert contract amount value from db to readable client view
export const cashFormatter = (amount) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD', //'USD' to prefix '$' to contract amount. "SGD" wouldn't work as it will prefix "SGD" instead of "$"
	});
	return formatter.format(amount);
};

// for filtering contract amount to render
export const contractAmountRange = [
	{ id: '1', min: 0, max: 100000, description: 'Less than $100,000' },
	{
		id: '2',
		min: 100001,
		max: 500000,
		description: '$100,001 to $500,000',
	},
	{
		id: '3',
		min: 500000,
		max: 1000000,
		description: '$500,000 to $1,000,000',
	},
	{
		id: '4',
		min: 1000001,
		max: 5000000,
		description: '$1,000,001 to $5,000,000',
	},
	{
		id: '5',
		min: 5000000,
		max: 99999999999,
		description: 'More than $5,000,000',
	},
];

//filter base on selected parameters to get render data
export const filteredResult = (
	renderData,
	agency,
	year,
	rangeSelected,
	range
) => {
	const filteredAgency = !agency
		? renderData
		: renderData.filter((item) => item.agency === agency);

	const filteredYear = !year
		? filteredAgency
		: filteredAgency.filter(
				({ yearAwarded }) => yearAwarded === parseInt(year)
		  );

	if (rangeSelected) {
		const foundRange = range.find((x) => x.id === rangeSelected);
		const { min, max } = foundRange;
		return filteredYear.filter(
			({ awardedAmt }) => awardedAmt >= min && awardedAmt <= max
		);
	}
	return filteredYear;
};

export const queryStringBuilder = (page, filterParams) => {
	let queriedParams = `?page=${page}`;

	if (filterParams) {
		for (const [key, value] of Object.entries(filterParams)) {
			if (value) {
				if (key === 'year') {
					queriedParams += `&${key}=${value.getFullYear().toString()}`;
				} else {
					queriedParams += `&${key}=${value}`;
				}
			}
		}
	}

	return queriedParams;
};

//current page data base on page size
export const getCurrentPageData = (renderData, currentPage, pageSize) => {
	const indexOfLastData = currentPage * pageSize;
	const indexOfFirstData = indexOfLastData - pageSize;
	return renderData.slice(indexOfFirstData, indexOfLastData);
};
