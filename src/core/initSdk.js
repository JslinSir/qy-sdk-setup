/**
 * 初始化Sdk
 */

import { loadScript } from '../utils/index'
import { QY_SDK_URL } from '../constants/index'

/**
 * 初始化sdk
 * @param {*} scriptSrc 
 * @returns 
 */
export const initSdk = async(scriptSrc=QY_SDK_URL) => {
    await loadScript(scriptSrc)
  
}



