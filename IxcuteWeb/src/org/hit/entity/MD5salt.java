package org.hit.entity;

import java.util.Random;
import java.security.MessageDigest;

public class MD5salt {
	private static char[] saltstr = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
	private static String queriedHash;//从库中查找到的hash值
//	public static void main(String[] args) {
//		String pwd = "213456";
//		System.out.println("原密码:"+pwd);
//		System.out.println("带盐密文"+Get_MD5salt(pwd,1));
//	}
	
	public static void setQueriedHash(String queriedHash) {
		MD5salt.queriedHash = queriedHash;
	}

	public static String Get_MD5salt(String pwd,int type) {
		try {
			MessageDigest md = MessageDigest.getInstance("MD5");
			String salt = null;
			if(type == 1) {
				salt = salt();
			}else if(type==0){
//                String queriedHash=;//从库中查找到的hash值
				System.out.println(queriedHash);
                salt=getSaltFromHash(queriedHash);
			}else {
				return "type wrong";
			}
			
			String addsalt = pwd + salt;
			String Hashresult = byte2HexStr(md.digest(addsalt.getBytes()));
			System.out.println("加盐密文:"+Hashresult);
			
			char cs[] = new char[48];
			for(int i=0;i<48;i+=3) {
				cs[i] = Hashresult.charAt(i/3*2);
				cs[i+1] = salt.charAt(i/3);
				cs[i+2] = Hashresult.charAt(i/3*2+1);
			}
			Hashresult = new String(cs);
			return Hashresult;
			
		}catch(Exception e) {
			e.printStackTrace();
			return e.toString();
		}
		
	}
	
	private static String getSaltFromHash(String hash) {
		char c[] = new char[16];
		for(int i=0;i<16;i++) {
			c[i] = hash.charAt(3*i+1);
		}
		String salt = new String(c);
		return salt;
	}
	
    private static String byte2HexStr(byte[] bytes) {
    	int len = bytes.length;
    	StringBuffer result = new StringBuffer();
    	for(int i=0;i<len;i++) {
    		byte getbyte = bytes[i];
    		result.append(saltstr[getbyte >>> 4 & 0xf]);
            result.append(saltstr[getbyte & 0xf]);
    	}
    	return result.toString();
    }
    	
	
	private static String salt() {
		Random random = new Random();
		StringBuilder s = new StringBuilder(16);
		for(int i=0;i<s.capacity();i++) {
			s.append(saltstr[random.nextInt(16)]);
		}
		
		return s.toString();
	}
}

