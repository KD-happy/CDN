Scanner：输入

```java
导包
import java.util.Scanner;

创建对象
	Scanner sc = new Scanner(System.in);

方法：
	int i = sc.nextInt(); //输入int类型

	String s = sc.nestLine(); //输入String类型
```

Random：生成随机数

```java
导包
import java.util.Random;

创建对象
	Random r = new Random();//构造

方法：
	int i = r.Random(10); //0-9的随机数
```

Array

```java
创建对象
	int[] arr = {1, 2, 3};

	int[] arr = new int[];
	arr[0] = 1;
	arr[1] = 2;
	arr[2] = 3;

	int[] arr = new int[] {1, 2, 3};

	int arr[] = {1, 2, 3};

	int arr[] = new int[3];
	arr[0] = 1;
	arr[1] = 2;
	arr[2] = 3;

	int arr[] = new int[] {1, 2, 3};

方法：
    int i = arr.length; //获得arr数组的长度
```

String

```java
创建对象：
	char[] chs = {'a', 'b', 'c'};
	String s = new String(chs);

	String s = ""; //创建一个空的String类型

	String s = "abc";

方法：
	int i = s.length(); //获得s的长度

	char ch = s.charAt(i); //获得s索引值为i的值

	boolean b = s.equals(s1); //判断s和s1是否相同，简单的==只是判断地址值
```

String Builder

```java
构造方法：
	StringBuilder sb = new StringBuilder();

	StringBuilder sb = new StringBuilder("hello");

	String s = "hello";
	StringBuilder sb = new StringBuilder(s);

方法：
    int i = sb.length();

	sb.append("hello"); //在sb后面加一个hello，并且返回到对象本身
	sb.append(10); //sb后面什么都可以加
	sb.append("hello").append(10); //链式编程
	//因为返回到对象本身的性质，所以可以把前面的看做一个个的对象

	sb.reverse(); //反转sb的值
```

```java
StringBuilder 转 String
    StringBuilder sb = new StringBuilder("hello");
	String s = sb.toString(); //toString() 方法的使用

String 转 StringBuilder
    String s = "hello";
	StringBuilder sb = new StringBuilder(s); //创建对象的时候赋值
```

ArrayList 集合

```java
导包
import java.util.ArrayList;

创建对象
    ArrayList<String> array = new ArrayList<String>();

方法
    array.add("hello"); //在后面添加hello，要注意添加的类型和 <> 中间定义的类型要一致
	array.add(1, "hello"); //在索引值为1的地方加一个hello，原来的元素向后移

	array.remove.("hello"); //去除含有hello的元素，有多个重名时只能删除最前面的一个
	array.remove(1); //删除索引值为1的元素,返回值时布尔型，就是看他有没有删除成功

	array.set(1, "hello"); //将索引值为1的元素改成hello，返回值为被修改的元素

	array.size(); // 返回值为元素的个数


    ArrayList<Student> array = new ArrayList<Student>(); //自己创建的类，也是可以用的，但是个人认为他保存的就是指向(就是指针，但是Java中没有指针)
    Student s1 = new Student();
    Student s2 = new Student();
    array.add(s1).add(s2);
```

