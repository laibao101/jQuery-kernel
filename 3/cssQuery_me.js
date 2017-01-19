/* *
 * @author Supersha
 * @Website : http : // www.supersha.cn
 * @QQ : 770104121
 */

var cssQuery =
{

   // parent : ���ڴ洢��ǰ�ڵ�ĸ��ڵ������

   parent : document,

   select : function(selectorStr)
   {

      var selectors = selectorStr.split(" ");
      // �ָ��ַ���

      for (var i = 0, len = selectors.length; i < len;
      i ++ )
      {

         var el = this.parent || document;
         // ���ڴ洢ָ��class���ԵĽڵ�����

         var val = this.replaceStr(selectors[i]);
         // �����"#"��"."��ţ����ڻ�ȡָ����ID�Ľڵ�����

         if (selectors.length == 1)
         {
            // ���ֻ��һ������

            if ( ! (/[#.]/g).test(selectors[i]))
            {
               // �����HTML��ǩ

               return document.getElementsByTagName(selectors[i]);

            }

            else
            {
               // �����ID����ָ����classֵ

               // �ж���ID����class����

               return (this.IDLabel(selectors[i])) ? this.$(val) : this.getElementsByClassName(document, "*", val);

            }

         }

         // ����ﵽselectorStr�ַ����������Ǹ�ID����class����HTML��ǩ

         else if(i == selectors.length - 1)
         {

            if ( ! (/[#.]/g).test(selectors[i]))
            {
               // �����HTML��ǩ

               return el.getElementsByTagName(selectors[i]);

            }

            else
            {
               // �����ID����class����

               return (this.IDLabel(selectors[i])) ? this.$(val) : this.getElementsByClassName(el, "*", val);

            }

         }

         else
         {
            // ��������������ϵ�selectorStr����洢��ǰ�ڵ�����õ�parent������

            if ( ! (/[#.]/g).test(selectors[i]))
            {
               // �����HTML��ǩ

               this.parent = el.getElementsByTagName(selectors[i])[0];

            }

            else
            {
               // �����ID����class����

               this.parent = ((/#/gi).test(selectors[i])) ? this.$(val) : el;

            }

         }

      }

   }
   ,

   $ : function(id)
   {
      // ���ڵõ�ָ��ID������

      return document.getElementById(id);

   }
   ,

   IDLabel : function(selector)
   {
      // �ж��Ƿ���ID����

      return ((/#/gi).test(selector)) ? true : false;

   }
   ,

   classLabel : function(selector)
   {
      // �ж��Ƿ���class����

      return ((/\./gi).test(selector)) ? true : false;

   }
   ,

   replaceStr : function(a)
   {
      // �滻��"#"��"."��ţ����ڻ�ȡָ����ID�Ľڵ�����

      return a.replace("#", "").replace(".", "");

   }
   ,

   getElementsByClassName : function(el, tag, classname)
   {
      // ͨ��class����ֵ��ȡ����class����ֵ��Ԫ�ص�����

      var elem = el || document;

      if ( ! classname)

      return;



      tag = tag || "*";

      var allTagsDom = ((tag == "*") && (elem.all)) ? elem.all : elem.getElementsByTagName(tag);



      classname = classname.replace(/\-/g, "\\-");

      var regex = new RegExp("(^|\\s*)" + classname + "(\\s*|$)");



      var matchElements = new Array();

      var element;

      for (var i = 0; i < allTagsDom.length; i ++ )
      {

         element = allTagsDom[i];

         if (regex.test(element.className))
         {
            // �����������������

            matchElements.push(element);

         }

      }

      return matchElements;

   }

}

// ���÷�����cssQuery.select(selectorString); selectorString �����֣�"#p #b .em"��

// ���Խ���HTML��ǩ��ID��class����ϣ�����ָ����selectorString������
