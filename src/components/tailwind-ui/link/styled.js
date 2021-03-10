/* eslint-disable import/no-extraneous-dependencies */
import tw, { styled } from 'twin.macro';

//  className =
//    'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium';

const StyledLink = styled.a(({ size, color }) => [
  size === 'xs' && tw`px-2.5 py-1.5 text-xs`,
  size === 'sm' && tw`px-3 py-2 text-sm leading-4`,
  size === 'med' && tw`px-4 py-2 text-sm`,
  size === 'medlg' && tw`px-4 py-2 text-base`,
  size === 'lg' && tw`px-6 py-3 text-base`,
  color === 'indigo' &&
    tw`text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
  tw`font-medium inline-flex items-center border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`,
]);

export default StyledLink;
