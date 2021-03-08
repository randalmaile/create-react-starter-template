/* eslint-disable import/no-extraneous-dependencies */
import tw, { styled } from 'twin.macro';

const StyledImage = styled.button(({ w }) => [
  w === 'full' && tw`w-full`,
  tw`text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`,
  tw`font-medium inline-flex items-center border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`,
]);
export default StyledImage;
